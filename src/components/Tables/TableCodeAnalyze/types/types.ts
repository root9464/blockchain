export type PropsInTableCodeAnalyze = {
  has_error: boolean;
  enriched_erros_data_output: EnrichedErrosDataOutput[];
}

type EnrichedErrosDataOutput = {
  url: string;
  name: string;
  cases: number;
  severity: 'High' | 'Medium' | 'Low' | 'Informational' | 'Optimization';
  confidence: 'High' | 'Medium';
}
