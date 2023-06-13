export function windowRedirect(url: string) {
  if (typeof window !== 'undefined') {
    window.location.href = url;
  }
}

export const dataURLtoFile = (dataUrl: string, filename: string): File => {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
};

export function trimData<T>(formData: T): T {
  if (isString(formData)) {
    return trim(formData) as unknown as T;
  }
  if (isObject(formData) && !isDate(formData) && !(formData instanceof File)) {
    return mapValues(formData, (data) => {
      if (isString(data)) {
        return trim(data);
      }
      if (isArray(data)) {
        return data.map((item) => trimData(item));
      }
      if (isObject(data)) {
        return trimData(data);
      }
      return data;
    }) as unknown as T;
  }
  return formData;
}

export function dataSerialization<T>(
  data: T,
  toFormData?: FormData,
  parentKey?: string,
): FormData {
  const formData = toFormData || new FormData();
  if (isObject(data) && !isDate(data) && !(data instanceof File)) {
    if (isEmpty(data) && isArray(data)) {
      formData.append(`${parentKey}[]`, '');
    } else {
      forEach(keys(data), (value: string) => {
        const key = parentKey ? `${parentKey}[${value}]` : value;
        dataSerialization(get(data, [value]), formData, key);
      });
    }
  } else {
    const value = (isNull(data) ? '' : data) as string;
    formData.append(parentKey, value);
  }

  return formData;
}

export function getIntersectionArrays<
  DropdownDataType extends Record<string, App.Any[]>,
  PropertyKey extends keyof DropdownDataType,
>(
  source: DropdownDataType,
  destination: DropdownDataType,
  pairKeys: PropertyKey[],
): DropdownDataType {
  const newValue = { ...source };
  forEach(pairKeys, (matchingKey) => {
    const propertyValue = intersection(
      source[matchingKey],
      destination[matchingKey],
    );
    newValue[matchingKey as PropertyKey] =
      propertyValue as DropdownDataType[PropertyKey];
  });
  return newValue;
}
