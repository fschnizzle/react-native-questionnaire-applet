import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define form data structure
interface FormData {
  subCategory1: {
    textEntry: string;
    numberEntry: number;
    radioSelection: string;
    checkboxSelection: string[];
    sliderValue: number;
  };
  subCategory2: {
    textEntry: string;
    numberEntry: number;
    radioSelection: string;
    checkboxSelection: string[];
    sliderValue: number;
  };
}

// Default form data
const defaultFormData: FormData = {
  subCategory1: {
    textEntry: '',
    numberEntry: 0,
    radioSelection: '',
    checkboxSelection: [],
    sliderValue: 0,
  },
  subCategory2: {
    textEntry: '',
    numberEntry: 0,
    radioSelection: '',
    checkboxSelection: [],
    sliderValue: 0,
  },
};

// Define the context interface
const FormContext = createContext<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}>({
  formData: defaultFormData,
  setFormData: () => {},
});

// Define props type for the FormProvider
interface FormProviderProps {
  children: ReactNode;
}

// FormProvider component
export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for accessing form context
export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
};