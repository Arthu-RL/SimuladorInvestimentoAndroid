import { Header } from '@/components/ui/Header'
import { ScrollView, View } from 'react-native'
// import HeroGlobe from '@/components/Home/HeroGlobe'
import { HeroHeadingSection } from '@/components/Home/HeroHeadingSection'
import HeroGlobe from '@/components/Home/HeroGlobe'

export function Home() {

  return (
    <View className="flex-1 w-full bg-background">
      {/* <Header title='Home'/> */}
      <View className='w-full mt-20'>
        <ScrollView>
          <HeroHeadingSection/>
          {/* <HeroGlobe /> */}
        </ScrollView>
      </View>
    </View>
  )
}