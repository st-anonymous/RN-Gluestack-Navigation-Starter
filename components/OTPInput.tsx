import React, { useState, useRef } from "react"
import { TextInput, StyleSheet } from "react-native"
import { Typography } from "./Typography"
import { HStack } from "@/components/ui/hstack"
import { Box } from "@/components/ui/box"

interface OtpInputProps {
  length?: number
  onChange: (otp: string) => void
  label?: string
}

export const OtpInput: React.FC<OtpInputProps> = ({ length = 4, onChange, label }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""))
  const inputRefs = useRef<TextInput[]>([])

  const handleChange = (index: number, value: string) => {
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input field
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }

    // on OTP change
    onChange(newOtp.join(""))
  }

  const handleKeyPress = (index: number, key: string) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp]
      newOtp[index - 1] = ""
      setOtp(newOtp)
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <Box className="gap-4">
      {label && (
        <Typography className="text-lg font-bold">
          {label}
        </Typography>
      )}
      <HStack className="w-full justify-around">
        {Array(length)
          .fill(null)
          .map((_, index) => (
            <TextInput
              key={index.toString()}
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              ref={(ref) => (inputRefs.current[index] = ref!)}
              // eslint-disable-next-line react-native/no-inline-styles, react-native/no-color-literals
              style={{
                ...styles.input,
                borderColor: otp[index] ? "black" : "transparent",
              }}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(value) => handleChange(index, value)}
              onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
              value={otp[index]}
              autoFocus={index === 0}
            />
          ))}
      </HStack>
    </Box>
  )
}

const styles = StyleSheet.create({
  input: {
    aspectRatio: 1,
    backgroundColor: "rgba(76, 73, 167, 0.5)",
    borderBottomWidth: 1,
    borderRadius: 5,
    color: "black",
    fontSize: 20,
    textAlign: "center",
    width: "15%",
  },
})
