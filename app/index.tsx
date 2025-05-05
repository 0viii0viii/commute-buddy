import * as React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { Menu } from '~/lib/icons/Menu';

export default function Screen() {
  return (
    <SafeAreaView className='flex-1 bg-secondary/30'>
      <View className='flex-row items-center gap-2 p-4'>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
        <Input
          placeholder="검색어를 입력하세요"
          className='flex-1 bg-white'
        />
      </View>
    </SafeAreaView>
  );
}
