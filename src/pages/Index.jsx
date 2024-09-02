import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import SavedScripts from '../components/SavedScripts';
import QueryExecutor from '../components/QueryExecutor';
import Navbar from '../components/Navbar';
import { executeDatabaseQuery } from '../services/databaseService';

const Index = () => {
  const [selectedScript, setSelectedScript] = useState('');
  const [customQuery, setCustomQuery] = useState('');
  const [queryResult, setQueryResult] = useState(null);
  const { toast } = useToast();

  const handleScriptSelect = (script) => {
    setSelectedScript(script);
    setCustomQuery(script);
  };

  const handleCustomQueryChange = (e) => {
    setCustomQuery(e.target.value);
  };

  const executeQuery = async () => {
    try {
      setQueryResult(null); // Clear previous results
      const result = await executeDatabaseQuery(customQuery);
      setQueryResult(result);
      toast({
        title: "Consulta ejecutada con éxito",
        description: "Los resultados se muestran a continuación.",
      });
    } catch (error) {
      console.error('Error de ejecución de consulta:', error);
      toast({
        title: "Error al ejecutar la consulta",
        description: error.message || 'Ocurrió un error inesperado',
        variant: "destructive",
      });
      setQueryResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="p-8 pt-32"> {/* Increased top padding from pt-24 to pt-32 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Scripts Guardados</CardTitle>
            </CardHeader>
            <CardContent>
              <SavedScripts onScriptSelect={handleScriptSelect} />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Ejecutor de Consultas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  value={customQuery}
                  onChange={handleCustomQueryChange}
                  placeholder="Ingrese su consulta SQL aquí"
                  className="w-full"
                />
                <Button onClick={executeQuery} className="w-full">Ejecutar Consulta</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Resultados de la Consulta</CardTitle>
          </CardHeader>
          <CardContent>
            <QueryExecutor result={queryResult} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;