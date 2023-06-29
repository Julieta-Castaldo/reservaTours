import {
    MainSectionSearchBar,
    MainSectionSearchWrapper,
    MainSectionWrapper
} from "./MainSection.styled.js";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import locationPng from './Icons/IconLocation.svg';
import categoryPng from './Icons/IconCategory.svg';
//Hooks
import { useGetCities } from '../../../Hooks/Cities/useGetCities.jsx'
import { useGetCategories } from "../../../Hooks/Categories/useGetCategories.jsx";
import { useGlobalState } from "../../../Context/Context.jsx";

const divStyle = {
    display: 'flex',
    justifyContent: 'space-between'
};

export const MainSection = ({ products, setFilters, setReloadProducts }) => {
    const [cities, handleGetCities] = useGetCities()
    const [selectedCity, setSelectedCity] = useState('')
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categories, handleGetCategories] = useGetCategories()
    const [inputValueCity, setInputValueCity] = useState('')
    const [inputValueCategoy, setInputValueCategory] = useState('')
    const [filtersApplied, setFiltersApplied] = useState({
        ciudad: '',
        categoria: '',
        fecha: null
    })
    const { setSearchedDate } = useGlobalState()
    useEffect(() => {
        handleGetCities()
        handleGetCategories()
    }, [])

    return (
        <MainSectionWrapper
            bgImg={'https://dh-g6-assets.s3.amazonaws.com/Banner_home_tablet.png'}
        >
            <MainSectionSearchBar>
                <MainSectionSearchWrapper
                // style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}
                >
                    <div>
                        <div style={divStyle}>
                            <p>Ciudad</p>
                            <img src={locationPng} alt="Icono" />
                        </div>
                        <Autocomplete
                            disablePortal
                            inputValue={inputValueCity}
                            options={cities}
                            id="disable-close-on-select"
                            getOptionLabel={option => option && option.nombreCiudad ? option.nombreCiudad : ''}
                            sx={{ width: 200 }}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '16px' }}>
                                    {option.nombreCiudad}
                                </li>

                            )}
                            onInputChange={(event, newInputValue) => {
                                setInputValueCity(newInputValue);
                            }}
                            value={selectedCity}
                            renderInput={(params) => <TextField variant="standard" {...params} InputProps={{
                                ...params.InputProps,
                                placeholder: 'Ingresa el destino',
                                style: { fontSize: '16px' }

                            }} />}
                            onChange={(e, newValue) => {
                                setSelectedCity(newValue ? newValue : '')
                                if (newValue) setFiltersApplied({ ...filtersApplied, ciudad: newValue.id })
                                else setFiltersApplied({ ...filtersApplied, ciudad: '' })
                            }}
                        />
                    </div>
                    <div>
                        <div style={divStyle}>
                            <p>Categoría</p>
                            <img src={categoryPng} alt="Icono" />
                        </div>
                        <Autocomplete
                            disablePortal
                            inputValue={inputValueCategoy}
                            options={categories}
                            id="disable-close-on-select"
                            getOptionLabel={option => option && option.nombreCategoria ? option.nombreCategoria : ''}
                            sx={{ width: 200 }}
                            renderOption={(props, option) => (
                                <li {...props} style={{ fontSize: '16px' }}>
                                    {option.nombreCategoria}
                                </li>
                            )}
                            value={selectedCategory}
                            onInputChange={(event, newInputValue) => {
                                setInputValueCategory(newInputValue);
                            }}
                            renderInput={(params) => <TextField variant="standard" {...params} InputProps={{
                                ...params.InputProps,
                                placeholder: 'Elige tu favorita',
                                style: { fontSize: '16px' }

                            }} />}
                            onChange={(e, newValue) => {
                                if (newValue) {
                                    setFiltersApplied({ ...filtersApplied, categoria: newValue.id })
                                    setSelectedCategory(newValue)
                                } else {
                                    setFiltersApplied({ ...filtersApplied, categoria: '' })
                                    setSelectedCategory('')
                                }
                            }}
                        />
                    </div>
                    <div>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                sx={{ width: 200, fontSize: '20px' }}
                                value={selectedDate}
                                onChange={(newValue) => {
                                    if (newValue === 'Invalid Date') {
                                        setFiltersApplied({ ...filtersApplied, fecha: null })
                                        setSearchedDate(null)
                                    } else {
                                        const date = new Date(newValue);
                                        const year = date.getFullYear();
                                        const month = String(date.getMonth() + 1).padStart(2, '0');
                                        const day = String(date.getDate()).padStart(2, '0');
                                        const formattedDate = `${year}-${month}-${day}`
                                        setSearchedDate(newValue)
                                        setFiltersApplied({ ...filtersApplied, fecha: formattedDate })
                                    }
                                }}
                            />
                        </LocalizationProvider>

                    </div>
                    <div>
                        <button
                            onClick={() => {
                                setReloadProducts(true)
                                setFilters(filtersApplied)
                            }}
                            style={{ border: 'none', backgroundColor: '#58C1CE', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50px', width: '80px' }}>
                            <SearchIcon sx={{ fontSize: 34, color: 'white' }} />
                        </button>
                    </div>
                </MainSectionSearchWrapper>
            </MainSectionSearchBar>

        </MainSectionWrapper >
    )
}