import {
    AdminUsersTableWrapper,
    AdminUsersTableTBody,
    AdminUsersTabletTHead,
    AdminUsersTableTd,
    AdminUsersTableTh,
    AdminUsersTableTr
} from "../AdminUsersTable/AdminUsersTable.styled"
import {ButtonIcon} from "../../../molecules/ButtonIcon/ButtonIcon"
import {useGlobalState} from "../../../../Context/Context"
import {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import PropTypes from "prop-types";
import {IconEdit} from "../../../svgs/IconEdit.jsx";
import {IconTrash} from "../../../svgs/IconTrash.jsx";
import Swal from 'sweetalert2';
import {IconArrowRight2} from "../../../svgs/IconArrowRight2"
import NewCityModal from "../../../molecules/Modal/NewCityModal"
//Hooks
import {useDeleteCity} from "../../../../Hooks/Cities/useDeleteCity"
import {
    AdminTableSubWrapper,
    AdminTableTag, AdminTableTd, AdminTableTh, AdminTableTr,
    AdminTabletTHead,
    AdminTableWrapper
} from "../AdminProductsTable/AdminTable.styled.js";

export const AdminCitiesTable = ({data, setReloadCities}) => {
    const {auth} = useGlobalState()
    const navigate = useNavigate()
    const [openNewCity, setOpenNewCity] = useState(false)
    const [handleDeleteCity] = useDeleteCity()
    const [openEditCity, setOpenEditCity] = useState(false)
    const [editInitialValues, setEditInitialValues] = useState(false)

    useEffect(() => {
        if (!auth) navigate('/')
    }, [])

    const deleteCity = (id) => {
        Swal.fire({
            title: '¿Estás seguro de eliminar esta ciudad?',
            text: 'Al eliminarla, se eliminarán también los tours de esta ciudad.',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteCity(id, setReloadCities)
            }
        })
    }

    const handleEdit = (values) => {
        setEditInitialValues(values)
        setOpenEditCity(true)
    }

    return (
        <>
            <AdminTableWrapper>
                <AdminTableSubWrapper>
                    <AdminTableTag>
                        <AdminTabletTHead>
                            <AdminTableTr
                                background={'#58C1CE'}
                            >
                                <AdminTableTh
                                    width="max-content"
                                    justify='center'
                                >
                                    <input type="checkbox" /*onClick={toggleAll(this)}*/ />
                                    <span className="selectAllLabel"></span>
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="10rem"
                                >
                                    Ciudad
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="30rem"
                                >

                                    Descripción
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="8.9rem"
                                >
                                    Longitud
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="8.9rem"
                                >
                                    Latitud
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="12rem"
                                >
                                    <ButtonIcon
                                        text='Agregar'
                                        src={
                                            <IconArrowRight2
                                                size='18'
                                                className='iconSVG'
                                            />
                                        }
                                        borderColor={'#F2A63B'}
                                        color={'white'}
                                        hoverColor={'#F2A63B'}
                                        bgColor={'#F2A63B'}
                                        hoverBgColor={'transparent'}
                                        onClick={() => setOpenNewCity(true)}
                                    />
                                </AdminTableTh>
                            </AdminTableTr>
                        </AdminTabletTHead>
                        <AdminUsersTableTBody>
                            {
                                data && data.length !== 0 && data.map((row) => {
                                    return (
                                        <AdminTableTr key={row.id}>
                                            <AdminTableTd
                                                width="max-content"
                                                justify='center'
                                            ><input type="checkbox"/>
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="10rem"
                                            >
                                                {row.nombreCiudad}
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="30rem"
                                            >
                                                {row.descripcionCiudad}
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="10rem"
                                            >
                                                {row.latitud}
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="10rem"
                                            >
                                                {row.longitud}
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="12.4rem"
                                                justify='center'
                                            >
                                                <button onClick={() => handleEdit(row)}
                                                        style={{border: 'none', backgroundColor: 'transparent'}}>
                                                    <IconEdit
                                                        color={"#F2A63B"}
                                                    />
                                                </button>
                                                <button onClick={() => deleteCity(row.id)}
                                                        style={{border: 'none', backgroundColor: 'transparent'}}>
                                                    <IconTrash
                                                        color={"#E72328"}
                                                    />
                                                </button>
                                            </AdminTableTd>
                                        </AdminTableTr>
                                    )
                                })
                            }
                        </AdminUsersTableTBody>
                    </AdminTableTag>
                </AdminTableSubWrapper>
            </AdminTableWrapper>
            {openNewCity &&
                <NewCityModal isOpen={openNewCity} onClose={() => setOpenNewCity(false)}
                              setReloadCities={setReloadCities}/>
            }
            {openEditCity && editInitialValues &&
                <NewCityModal isOpen={openEditCity} onClose={() => setOpenEditCity(false)}
                              initialValue={editInitialValues} isNewCity={false} setReloadCities={setReloadCities}/>
            }
        </>
    )
}

AdminCitiesTable.propTypes = {
    api: PropTypes.array,
};