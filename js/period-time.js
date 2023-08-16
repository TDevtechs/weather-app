import{createDom} from './utils/Dom.js'
import {formatDate, formatTemp} from './utils/format-data.js'

export function periodTimeTemplate({ temp, date, icon, description}) {
	return `
	<li class="dayWeather-item is-selected">
      <span class="dayWeather-time">${date}</span>
      <img class="dayWeather-icon" height="48" width="48" src="https://openweathermap.org/img/wn/02d@2x.png" alt="${description}" rain="">
      <span class="dayWeather-temp">${temp}</span>
    </li>
	`
}

export function createPeriodTime(weather) {
	// debugger
	// temp
	// icon
	// Date
	// description
	const dateOptions = {
		hour: 'numeric',
		hour12: true,
	}
	const temp = formatTemp(weather.main.temp)
	const date = formatDate(new Date (weather.dt *1000), dateOptions)
	const config = {
		temp,
		date,
		icon: weather.weather[0].icon,
		description: weather.weather[0].description
	}
	return createDom(periodTimeTemplate(config))
}