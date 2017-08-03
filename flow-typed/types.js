export type ChartjsData = {
  datasets: array<ChartjsDatasets>,
  labels: array<string>
};

export type ChartjsDatasets = {
  backgroundColor: array<string>,
  data: array<number>
}

export type ChartjsOptions = {
  displayTitle: boolean,
  displayLegend: boolean,
  legendPosition: string
}

