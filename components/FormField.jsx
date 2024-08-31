import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TabBarIcon } from './TabBarIcon'

const FormField = ({
    title,
    placeholder,
    value,
    handleChangeText,
    otherStyles,
    ...props
}) => {
  const [showPassword, setShowPassword] = useState(true)
  const [showConfirm, setShowConfirm] = useState(true)
  return (
    <View className={`space-y-2`}>
      <Text className="text-base text-black font-medium">{title}</Text>

      <View className={`border-y-5  w-full h-16 px-4 bg-white rounded-lg focus:border-green-600 items-center flex-row ${otherStyles}`}>
        <TextInput 
            className="flex-1 text-black font-semibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="gray"
            onChangeText={handleChangeText}
            secureTextEntry={(title === 'Password' && showPassword) || (title === 'Confirm Password' && showConfirm)}
        />

        {title === 'Password'  && (
            <TouchableOpacity onPress={() =>
                setShowPassword(!showPassword)}>
                <TabBarIcon name={!showPassword ? 'eye' : 'eye-off' } className="text-gray-300 text-2xl"/>
            </TouchableOpacity>
        )} 
        {title === 'Confirm Password'  && (
            <TouchableOpacity onPress={() =>
                setShowConfirm(!showConfirm)}>
                <TabBarIcon name={!showConfirm ? 'eye' : 'eye-off' } className="text-gray-300 text-2xl"/>
            </TouchableOpacity>
        )} 
      </View>
    </View>
  )
}

export default FormField