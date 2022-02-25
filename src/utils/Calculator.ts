export const ConversionOneToThousand = (value: number): number => {
  value *= 1000;
  return value;
};

export const ConversionThousandToOne = (value: number): number => {
  value /= 1000;
  return value;
};
