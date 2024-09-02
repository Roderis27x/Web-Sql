import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogOverlay } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const initialSavedScripts = [
  { id: 1, name: 'Obtener Todos los Usuarios', script: 'SELECT * FROM users;' },
  { id: 2, name: 'Obtener Productos Activos', script: 'SELECT * FROM products WHERE status = "active";' },
  { id: 3, name: 'Pedidos Recientes', script: 'SELECT * FROM orders ORDER BY created_at DESC LIMIT 10;' },
];

const SavedScripts = ({ onScriptSelect }) => {
  const [savedScripts, setSavedScripts] = useState(initialSavedScripts);
  const [newScriptName, setNewScriptName] = useState('');
  const [newScriptContent, setNewScriptContent] = useState('');
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleAddScript = () => {
    if (newScriptName && newScriptContent) {
      const newScript = {
        id: savedScripts.length + 1,
        name: newScriptName,
        script: newScriptContent,
      };
      setSavedScripts([...savedScripts, newScript]);
      setNewScriptName('');
      setNewScriptContent('');
      setOpen(false);
      toast({
        title: "Script guardado",
        description: "El nuevo script se ha guardado correctamente.",
      });
    } else {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-2">
      {savedScripts.map((script) => (
        <Button
          key={script.id}
          variant="outline"
          className="w-full justify-start"
          onClick={() => onScriptSelect(script.script)}
        >
          {script.name}
        </Button>
      ))}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">Agregar Nuevo Script</Button>
        </DialogTrigger>
        <DialogOverlay className="bg-black/30 backdrop-blur-sm" />
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="mb-6">Agregar Nuevo Script</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="scriptName" className="block mb-2">Nombre del Script</Label>
              <Input
                id="scriptName"
                value={newScriptName}
                onChange={(e) => setNewScriptName(e.target.value)}
                placeholder="Ingrese el nombre del script"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="scriptContent" className="block mb-2">Contenido del Script</Label>
              <Input
                id="scriptContent"
                value={newScriptContent}
                onChange={(e) => setNewScriptContent(e.target.value)}
                placeholder="Ingrese la consulta SQL"
                className="w-full"
              />
            </div>
            <Button onClick={handleAddScript} className="w-full mt-4">Agregar Script</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SavedScripts;