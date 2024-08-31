import { View, Text } from 'react-native'
import { React, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FormField, CustomButton } from '../../components'
import { Link } from 'expo-router'

const Registration = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirm_password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () => {
  }
  const[errorMsg, setErrorMsg]=useState('')
  const Validation = () => {
    if(form.password != form.confirm_password){
      setErrorMsg('Passwords are not the same!');
    }
    else{
      setErrorMsg('');
    }
  }
  return (
    <SafeAreaView className="h-[full] p-7">
      <Text className="w-[25vw] text-2xl font-medium text-left">DAUYS<Text className="text-[#0D9543]">YM</Text></Text>
      <View className="w-full h-full justify-center items-center"> 
        <Text className="text-[#0D9543] text-3xl">Sign Up</Text>
        <Text className="text-red-600">{errorMsg}</Text>
        <View className="h-[50vh] w-[80vw] justify-evenly items-center mt-7">
          <FormField 
            title="Email"
            placeholder='example@gmail.com'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
          />
          <FormField 
            title="Confirm Password"
            value={form.confirm_password}
            handleChangeText={(e) => setForm({ ...form, confirm_password: e})}
          />

          <CustomButton 
            title="Sign Up"
            handlePress={Validation}
            containerStyles="w-[40vw] border-2 border-[#0D9543] bg-[#0D9543] mt-7"
            textStyles={"text-white"}
            isLoading={isSubmitting}
          />
        </View>
        <View className="h-[20vh] v-[50vw] justify-center items-center">
          <Text className="text-[#333333] opacity-60 text-lg ">────────  OR  ────────</Text>
          <Text className="text-black text-base">Already have an account? <Link href="./login" className='text-[#0D9543]'>Log In</Link></Text>

        </View>
          
      </View>
    </SafeAreaView>
  )
}

export default Registration