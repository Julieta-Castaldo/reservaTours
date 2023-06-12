import { MainSectionSearchBar, MainSectionWrapper } from "./MainSection.styled.js";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//Hooks
import { useGetCities } from '../../../Hooks/Cities/useGetCities.jsx'
import { useGetCategories } from "../../../Hooks/Categories/useGetCategories.jsx";
import { useEffect, useState } from "react";

export const MainSection = ({ products, setFiltersApplied, filtersApplied }) => {
    const [cities, handleGetCities] = useGetCities()
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categories, handleGetCategories] = useGetCategories()

    useEffect(() => {
        handleGetCities()
        handleGetCategories()
    }, [])

    return (
        <MainSectionWrapper
            bgImg={'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80'}
        >
            <MainSectionSearchBar>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                    <div>
                        <p>Busca por ciudad</p>
                        <Autocomplete
                            disablePortal
                            inputValue={selectedCity && selectedCity.nombreCiudad}
                            options={cities}
                            id="disable-close-on-select"
                            getOptionLabel={option => option && option.nombreCiudad ? option.nombreCiudad : ''}
                            sx={{ width: 220 }}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '16px' }}>
                                    {option.nombreCiudad}
                                </li>
                            )}
                            value={selectedCity}
                            renderInput={(params) => <TextField variant="standard" {...params} InputProps={{
                                ...params.InputProps,
                                style: { fontSize: '16px' }
                            }} />}
                            onChange={(e, newValue) => {
                                setSelectedCity(newValue ? newValue : '')
                                if (newValue) setFiltersApplied({ type: 'ciudad', value: newValue.id })
                                else setFiltersApplied({ type: '', value: '' })
                                setSelectedCategory('')
                                setSelectedDate('')
                            }}
                        />
                    </div>
                    <div>
                        <p>Busca por categoría</p>
                        <Autocomplete
                            disablePortal
                            inputValue={selectedCategory && selectedCategory.nombreCategoria}
                            options={categories}
                            id="disable-close-on-select"
                            getOptionLabel={option => option && option.nombreCategoria ? option.nombreCategoria : ''}
                            sx={{ width: 220 }}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '16px' }}>
                                    {option.nombreCategoria}
                                </li>
                            )}
                            value={selectedCategory}
                            renderInput={(params) => <TextField variant="standard" {...params} InputProps={{
                                ...params.InputProps,
                                style: { fontSize: '16px' }
                            }} />}
                            onChange={(e, newValue) => {
                                setSelectedCity('')
                                setFiltersApplied({ type: 'categoria', value: newValue.id })
                                setSelectedCategory(newValue ? newValue : '')
                                setSelectedDate('')
                            }}
                        />
                    </div>
                    <div>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={{ width: 220, fontSize: '20px' }}
                                value={selectedDate}
                                onChange={(newValue) => {
                                    if (newValue === 'Invalid Date') {
                                        setFiltersApplied({ type: 'fecha', value: null })
                                    } else {
                                        const date = new Date(newValue);
                                        const year = date.getFullYear();
                                        const month = String(date.getMonth() + 1).padStart(2, '0');
                                        const day = String(date.getDate()).padStart(2, '0');
                                        const formattedDate = `${year}-${month}-${day}`
                                        setFiltersApplied({ type: 'fecha', value: '2023-11-11' })
                                    }
                                    setSelectedCategory('')
                                    setSelectedCity()
                                }}
                            />
                        </LocalizationProvider>

                    </div>
                </div>
            </MainSectionSearchBar>

        </MainSectionWrapper >
    )
}