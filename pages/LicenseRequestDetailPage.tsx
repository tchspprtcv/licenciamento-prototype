import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { StepStatus } from '../types';

// A simple Stepper component for visualization
const Stepper = ({ currentStep }: { currentStep: number }) => {
    const steps = ['Pedido', 'Vistorias', 'Pagamento', 'Emissão'];
    return (
        <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
                <React.Fragment key={step}>
                    <div className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${index + 1 <= currentStep ? 'bg-cv-blue text-white' : 'bg-gray-200 text-gray-500'}`}>
                            {index + 1}
                        </div>
                        <p className={`mt-2 text-sm ${index + 1 <= currentStep ? 'font-semibold text-cv-blue' : 'text-gray-500'}`}>{step}</p>
                    </div>
                    {index < steps.length - 1 && <div className="flex-1 h-1 bg-gray-200 mx-4"></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export const LicenseRequestDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { getLicenseRequestById, getLicenseTypeById, updateLicenseRequest } = useData();

    const request = id ? getLicenseRequestById(parseInt(id)) : null;

    if (!request) {
        return <Card><CardHeader><CardTitle>Erro</CardTitle></CardHeader><CardContent><p>Pedido não encontrado.</p></CardContent></Card>;
    }

    const licenseType = getLicenseTypeById(request.licenseTypeId);

    const handleApproveVistoria = (entityName: string) => {
        const updatedRequest = { ...request };
        const vistoria = updatedRequest.steps.vistorias.items.find(v => v.entityName === entityName);
        if (vistoria) {
            vistoria.status = StepStatus.Concluido;
            vistoria.date = new Date().toISOString().split('T')[0];
        }
        // Check if all vistorias are complete
        const allVistoriasDone = updatedRequest.steps.vistorias.items.every(v => v.status === StepStatus.Concluido);
        if(allVistoriasDone) {
            updatedRequest.steps.vistorias.status = StepStatus.Concluido;
            updatedRequest.currentStep = 3; // Move to payment
        }
        updateLicenseRequest(updatedRequest);
    };

    const handleConfirmPayment = () => {
        const updatedRequest = { ...request };
        updatedRequest.steps.pagamento.status = StepStatus.Concluido;
        updatedRequest.steps.pagamento.date = new Date().toISOString().split('T')[0];
        updatedRequest.currentStep = 4; // Move to emission
        updateLicenseRequest(updatedRequest);
    };

    const handleIssueLicense = () => {
        const updatedRequest = { ...request };
        updatedRequest.steps.emissao.status = StepStatus.Concluido;
        updatedRequest.steps.emissao.date = new Date().toISOString().split('T')[0];
        updatedRequest.status = RequestStatus.Concluido;
        updateLicenseRequest(updatedRequest);
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Pedido de Licença #{request.id}</CardTitle>
                    <CardDescription>Requerente: {request.requesterName} | Licença: {licenseType?.name}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Stepper currentStep={request.currentStep} />
                </CardContent>
            </Card>

            {/* Step 2: Vistorias */}
            {request.currentStep === 2 && (
                 <Card>
                    <CardHeader><CardTitle>Etapa 2: Vistorias Técnicas</CardTitle></CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                            {request.steps.vistorias.items.map(vistoria => (
                                <li key={vistoria.entityName} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                                    <div>
                                        <p className="font-medium">{vistoria.entityName}</p>
                                        <p className="text-sm text-gray-500">Estado: {vistoria.status}</p>
                                    </div>
                                    {vistoria.status === StepStatus.Pendente && (
                                        <Button size="sm" onClick={() => handleApproveVistoria(vistoria.entityName)}>Simular Aprovação</Button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}

            {/* Step 3: Pagamento */}
            {request.currentStep === 3 && (
                 <Card>
                    <CardHeader><CardTitle>Etapa 3: Pagamento de Taxas</CardTitle></CardHeader>
                    <CardContent className="flex flex-col items-center text-center">
                        <p className="mb-4">A aguardar pagamento das taxas aplicáveis.</p>
                        <Button onClick={handleConfirmPayment}>Simular Confirmação de Pagamento</Button>
                    </CardContent>
                </Card>
            )}

             {/* Step 4: Emissão */}
             {request.currentStep === 4 && request.status !== RequestStatus.Concluido && (
                 <Card>
                    <CardHeader><CardTitle>Etapa 4: Emissão do Alvará</CardTitle></CardHeader>
                    <CardContent className="flex flex-col items-center text-center">
                        <p className="mb-4">Processo aprovado e pagamento confirmado. Pronto para emissão.</p>
                        <Button onClick={handleIssueLicense}>Simular Emissão de Alvará</Button>
                    </CardContent>
                </Card>
            )}

            {request.status === RequestStatus.Concluido && (
                 <Card className="bg-green-50 border-green-200">
                    <CardHeader><CardTitle className="text-green-800">Processo Concluído</CardTitle></CardHeader>
                    <CardContent>
                        <p className="text-green-700">O alvará para este pedido foi emitido com sucesso em {request.steps.emissao.date}.</p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};
