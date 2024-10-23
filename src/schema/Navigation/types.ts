import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Details: { cityId: number };
    List: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
