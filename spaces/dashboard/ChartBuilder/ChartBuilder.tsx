"use client"

import { ReactElement } from "react";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query'
import { Chart } from "react-google-charts";
import { queryClient } from '../lib/reactQueryProvider';
import { RawData, ChartData, getRawData } from "./chartDataFetcher";

function dataToChartData(rawData?: RawData): ChartData {
  const columns: ChartData = [["time window", "intensity"]]
  if (!rawData) {
    return columns
  }
  const chartData: ChartData = rawData.data.map(item => [`${item.from}-${item.to}`, item.intensity.actual])
  const dataWithColumnNames = columns.concat(chartData)
  return dataWithColumnNames
}

function ChartBuilder(): ReactElement {
  const { data, isError, isLoading } = useQuery({ queryKey: ['chart'], queryFn: getRawData }, queryClient)

  if (isLoading) {
    return <CircularProgress />
  }

  if (isError) {
    return (
      <Box>
        We're sorry. The data seems to be temporarily unavailable.
      </Box>
    )
  }

  return (
    <Chart
      chartType="LineChart"
      data={dataToChartData(data)}
      width="100%"
      height="400px"
      legendToggle
    />
  )
}

export default ChartBuilder;
