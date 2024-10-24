import 'react-native';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CityCard from '.';

// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

it('component renders', () => {
    render(<CityCard name="Test" temp={21} weather={{ id: 0, main: '', description: 'snow', icon: '01d' }} onPress={() => { }} />);
});


it('Temperature is rendered with units', () => {
    const temp = 21;
    render(<CityCard name="Test" temp={temp} weather={{ id: 0, main: '', description: 'snow', icon: '01d' }} onPress={() => { }} />);
    expect(screen.getByText(`${temp}℃`)).toBeOnTheScreen();
});

it('OnPress is called', () => {
    const onPressMock = jest.fn();
    render(<CityCard name="Test" temp={21} weather={{ id: 0, main: '', description: 'snow', icon: '01d' }} onPress={onPressMock} />);
    fireEvent.press(screen.getByText('Test'));
    expect(onPressMock).toHaveBeenCalled();
});
