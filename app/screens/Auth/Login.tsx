import React, { useEffect, useState } from "react"
import { Box } from "@/components/ui/box"
import { CustomInput, Typography } from "@/components/index"
import { VStack } from "@/components/ui/vstack"
import { OtpInput } from "@/components/OTPInput"
import { useNavigation } from "@react-navigation/native"

export const Login = () => {
  const navigation = useNavigation()
  const [mobileNumber, setMobileNumber] = useState("")
  const [isOTPSent, setIsOTPSent] = useState(false)
  const [otp, setOtp] = useState("")

  useEffect(() => {
    if(mobileNumber.length === 10 && otp.length === 4) {
      navigation.navigate("BottomTab" as never)
    }
  }, [mobileNumber, otp])
  
  return (
    <Box className="flex-1 items-center justify-center p-4 bg-black">
      <VStack space="md">
        <Typography className="text-2xl font-bold text-center mb-8">Login</Typography>
        
        <CustomInput
          label="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          placeholder="Enter your mobile number"
        />

        <OtpInput
          label="Enter OTP"
          length={4}
          onChange={setOtp}
        />
      </VStack>
    </Box>
  )
}
