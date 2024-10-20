// let's assume that for our operability some fields are required by us
export type RawData = {
  data:[
    {
      from: string, // required
      to: string, // required
      intensity: {
        forecast?: number,
        actual: number, // required
        index?: 'very low' | 'low' | 'moderate' | 'high' | 'very high';
      }
    }
  ]
}

export type ChartData = (string | number)[][]

export function isRawData(data: any): data is RawData {
  if (!Array.isArray(data.data) || data.data.length === 0) {
    return false;
  }

  for (const item of data.data) {
    if (typeof item !== 'object' || item === null) {
      return false;
    }

    if (typeof item.from !== 'string') {
      return false;
    }
    if (typeof item.to !== 'string') {
      return false;
    }

    if (typeof item.intensity !== 'object' || item.intensity === null) {
      return false;
    }

    if (typeof item.intensity.actual !== 'number') {
      return false;
    }

    if (item.intensity.forecast !== undefined && typeof item.intensity.forecast !== 'number') {
      return false;
    }
    if (item.intensity.index !== undefined && !['very low', 'low', 'moderate', 'high', 'very high'].includes(item.intensity.index)) {
      return false;
    }
  }

  return true;
}

export async function getRawData(): Promise<RawData> {
  const from = new Date('01 September 2024 14:48 UTC').toISOString()
  const to = new Date('30 September 2024 14:48 UTC').toISOString()
  const url = `https://api.carbonintensity.org.uk/intensity/${from}/${to}`
  try {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error("Chart data fetch failed")
    }

    const data = await res.json()
    if (!isRawData(data)) {
      throw new Error("Chart data is not valid")
    }

    return data
  } catch (err) {
    // log error so that we have a metric we can alert on
    throw err
  }
}
