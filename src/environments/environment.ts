// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  NASA_API_URL: 'https://api.nasa.gov/insight_weather/?api_key=VIR42z5A7upIcQ9veszIZCUapCdjZDmIKoQsefKI&feedtype=json&ver=1.0',
  NASA_API_KEY: 'VIR42z5A7upIcQ9veszIZCUapCdjZDmIKoQsefKI'
};
// NASA_API_KEY=VIR42z5A7upIcQ9veszIZCUapCdjZDmIKoQsefKI
/*

const apiKey = process.env.NASA_API_KEY;
const baseUrl = 'https://api.nasa.gov';
const marsWeatherUrl = `${baseUrl}/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`

*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
