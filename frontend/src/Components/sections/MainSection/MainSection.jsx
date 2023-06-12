import { MainSectionSearchBar, MainSectionWrapper } from "./MainSection.styled.js";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
//Hooks
import { useGetCities } from '../../../Hooks/Cities/useGetCities.jsx'
import { useGetCategories } from "../../../Hooks/Categories/useGetCategories.jsx";
import { useEffect, useState } from "react";

export const MainSection = ({ products, setFiltersApplied, filtersApplied }) => {
    const [cities, handleGetCities] = useGetCities()
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedDate, setSelectedDate] = useState('')
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
                            sx={{ width: 250 }}
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
                            sx={{ width: 250 }}
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
                        <p>Busca por fecha</p>
                        <Autocomplete
                            disablePortal
                            options={products}
                            id="disable-close-on-select"
                            getOptionLabel={option => option && option.nombre ? option.nombre : ''}
                            sx={{ width: 250 }}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '16px' }}>
                                    {option.nombre}
                                </li>
                            )}
                            renderInput={(params) => <TextField variant="standard" {...params} InputProps={{
                                ...params.InputProps,
                                style: { fontSize: '16px' }
                            }} />}
                            value={selectedDate}
                            onChange={(e, newValue) => {
                                setFiltersApplied({ type: 'fecha', value: newValue })
                                setSelectedCity('')
                                setSelectedCategory('')
                                setSelectedDate(newValue ? newValue : '')
                            }}
                        />
                    </div>
                </div>
            </MainSectionSearchBar>

        </MainSectionWrapper>
    )
}