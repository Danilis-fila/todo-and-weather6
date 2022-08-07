import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    weatherData: null,
    status: null
}

export const getInfoWeather = createAsyncThunk('weather/getInfoWeather', async (_, { rejectWithValue, dispatch }) => {
  
    const data = await fetch('https://api.openweathermap.org/data/2.5/weather?id=703883&lang=ru&appid=aff0fd22761621bea6cc92e26a5e82b0')
    .then((resp) => { return resp.json() })

    switch (data.cod) {
        case 200:
            return dispatch(setInfoWeather(data))
        default:
            return rejectWithValue("error")
    }
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
     //объект функций которые будут управлять нашим состоянием
    reducers: {
        setInfoWeather: (state, action) => {
            state.weatherData = action.payload
        },
    },
    extraReducers: {
        [getInfoWeather.pending]: (state) => { state.status = 'pending' },
        [getInfoWeather.fulfilled]: (state, action) => { state.status = 'fulfilled' },
        [getInfoWeather.rejected]: (state, action) => { state.status = 'rejected' },
    }
})

export const { setInfoWeather } = weatherSlice.actions
export default weatherSlice.reducer

//https://api.openweathermap.org/data/2.5/weather?id=703883&lang=ru&appid=aff0fd22761621bea6cc92e26a5e82b0 - api погоды в РК