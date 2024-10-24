import { http, HttpResponse } from 'msw';

import { apiUrl } from '../api';

export const handlers = [
    http.get(`${apiUrl}/group`, () => {
        return HttpResponse.json({
            list: [
                {
                    'coord': { 'lon': 139, 'lat': 35 },
                    'sys': { 'country': 'JP', 'sunrise': 1369769524, 'sunset': 1369821049 },
                    'weather': [{ 'id': 804, 'main': 'clouds', 'description': 'overcast clouds', 'icon': '04n' }],
                    'main': { 'temp': 289.5, 'humidity': 89, 'pressure': 1013, 'temp_min': 287.04, 'temp_max': 292.04 },
                    'wind': { 'speed': 7.31, 'deg': 187.002 },
                    'rain': { '3h': 0 },
                    'clouds': { 'all': 92 },
                    'dt': 1369824698,
                    'id': 1851632,
                    'name': 'Shuzenji',
                    'cod': 200,
                },
            ],
        });
    }),

    http.get(`${apiUrl}/forecast`, () => {
        return HttpResponse.json({
            'cnt': 38,
            'list': [{
                'dt': 1406106000,
                'main': {
                    'temp': 298.77,
                    'temp_min': 298.77,
                    'temp_max': 298.774,
                    'pressure': 1005.93,
                    'sea_level': 1018.18,
                    'grnd_level': 1005.93,
                    'humidity': 87,
                    'temp_kf': 0.26,
                },
                'weather': [{ 'id': 804, 'main': 'Clouds', 'description': 'overcast clouds', 'icon': '04d' }],
                'clouds': { 'all': 88 },
                'wind': { 'speed': 5.71, 'deg': 229.501 },
                'sys': { 'pod': 'd' },
                'dt_txt': '2014-07-23 09:00:00',
            }],
        });
    }),
];
