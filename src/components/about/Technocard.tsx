import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

export interface TechnoCardStepContentProps {
    title: string;
    description: string | React.ReactNode;
    level: string; // Niveau de compétence
    uses: string[]; // Liste des utilisations
    image: string;
}

export interface TechnoCardProps {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
    stepContent: TechnoCardStepContentProps;
}

function TechnoCard({ isOpen, setOpen, stepContent }: TechnoCardProps) {
    return (
        <Dialog onOpenChange={(open) => setOpen(open)} open={isOpen}>
            <DialogContent className="gap-0 p-0">
                {/* Image */}
                <div className="p-4 bg-gray-100 flex justify-center items-center">
                    <img 
                        className="w-24 h-24 object-contain" 
                        src={`https://cdn.jsdelivr.net/npm/simple-icons@14.0.0/icons/${stepContent.image}.svg`} 
                        alt={stepContent.image} 
                    />
                </div>

                {/* Contenu principal */}
                <div className="space-y-4 px-6 pb-6 pt-3">
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold">{stepContent.title}</DialogTitle>
                        <DialogDescription className="text-gray-600">{stepContent.description}</DialogDescription>
                    </DialogHeader>

                    {/* Niveau de compétence */}
                    <div className="border-l-4 border-blue-500 pl-4">
                        <p className="text-lg font-semibold">Niveau :</p>
                        <p className="text-gray-700">{stepContent.level}</p>
                    </div>

                    {/* Utilisations */}
                    <div>
                        <p className="text-lg font-semibold">Utilisations and projects :</p>
                        <ul className="list-disc list-inside text-gray-700">
                            {stepContent.uses.map((use, index) => (
                                <li key={index}>{use}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export { TechnoCard };
