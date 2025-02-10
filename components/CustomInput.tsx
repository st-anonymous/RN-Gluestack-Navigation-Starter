import React from "react"
import { Input, InputField } from "@/components/ui/input"
import { VStack } from "@/components/ui/vstack"
import { Typography } from "./Typography"

interface CustomInputProps {
  label: string
  value: string
  onChangeText: (text: string) => void
  placeholder: string
  inputClassName?: string
  labelClassName?: string
  inputFieldClassName?: string
}

export const CustomInput = (props: CustomInputProps) => {
  const { label, value, onChangeText, placeholder, inputClassName, labelClassName, inputFieldClassName } = props

  return (
    <VStack>
      <Typography className={`text-lg font-bold ${labelClassName}`}>{label}</Typography>
      <Input className={inputClassName}>
        <InputField value={value} onChangeText={onChangeText} placeholder={placeholder} className={inputFieldClassName} />
      </Input>
    </VStack>
  )
}