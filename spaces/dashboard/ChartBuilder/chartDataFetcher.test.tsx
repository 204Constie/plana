import { describe, expect } from '@jest/globals';
import { isRawData } from './chartDataFetcher';

describe("ChartBuilder", () => {
  describe("isRawData validates raw data returned by intensity API", () => {
    const validRawData = {
      data:[
        {
          from: "2017-08-25T12:35Z",
          to: "2017-09-25T12:35Z",
          intensity: {
            forecast: 4,
            actual: 5,
            index: "moderate",
          }
        }
      ]
    }
    it("should respond with true when data is valid", () => {
      expect(isRawData(validRawData)).toBe(true)
    })
    it("should allow non required fields to be empty", () => {
      expect(isRawData({
        ...validRawData,
        intensity: {
          actual: validRawData.data[0].intensity.actual,
        }
      })).toBe(true)
    })
    it("should respond with false when required fields are empty", () => {
      expect(isRawData({
        data: [{
          ...validRawData.data,
          intensity: {}
        }]
      })).toBe(false)
    })
    it("should respond with false the data is invalid", () => {
      expect(isRawData({})).toBe(false)
      expect(isRawData({
        data: [],
      })).toBe(false)
      expect(isRawData({
        data: [{
          invalidField: 0,
        }],
      })).toBe(false)
    })
  })
})
