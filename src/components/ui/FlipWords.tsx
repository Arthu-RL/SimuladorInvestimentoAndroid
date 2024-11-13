import React, { useCallback, useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [fadeAnim] = useState(new Animated.Value(0)); // Animação para a opacidade
  const [translateY] = useState(new Animated.Value(10)); // Animação para a posição Y

  // Função para iniciar a animação e alternar as palavras
  const startAnimation = useCallback(() => {
    const nextWord = words[words.indexOf(currentWord) + 1] || words[0];

    // Sequência de animações para opacidade e movimento
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: -5,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(200),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start(() => {
      setCurrentWord(nextWord);
    })

  }, [currentWord, fadeAnim, translateY, words]);

  // Efeito para iniciar a animação a cada intervalo
  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation();
    }, duration);
    return () => clearInterval(interval);
  }, [duration, startAnimation]);

  return (
    <View className={`relative z-10 ${className}`}>
      <Animated.View
        style={[
          {
            opacity: fadeAnim,
            transform: [{ translateY }],
          },
        ]}
        className="relative z-10"
      >
        {currentWord.split(' ').map((word, wordIndex) => (
          <Animated.Text
            key={word + wordIndex}
            style={[
              {
                opacity: fadeAnim,
                transform: [{ translateY }],
              },
            ]}
            className="inline-block color-white"
          >
            {word.split('').map((letter, letterIndex) => (
              <Text key={word + letterIndex} className="inline-block">
                {letter}
              </Text>
            ))}
            <Text className="inline-block">&nbsp;</Text>
          </Animated.Text>
        ))}
      </Animated.View>
    </View>
  );
};
