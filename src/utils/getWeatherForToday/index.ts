import { ForecastWeatherInternal } from '@schema/Weather';

export default function getWeatherForToday(data: ForecastWeatherInternal[] | undefined): ForecastWeatherInternal[] {
    if (!data) {
        return [];
    }
    return data.filter((value) => {
        var ts = value.dt * 1000;
        var today = new Date().setHours(0, 0, 0, 0);
        var thatDay = new Date(ts).setHours(0, 0, 0, 0);
        return today === thatDay;
    });
}
