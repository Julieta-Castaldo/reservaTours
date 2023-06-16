import { AdminUsersTableWrapper, AdminUsersTableTBody, AdminUsersTabletTHead, AdminUsersTableTd, AdminUsersTableTh, AdminUsersTableTr } from "../AdminUsersTable/AdminUsersTable.styled"
import { ButtonIcon } from "../../../molecules/ButtonIcon/ButtonIcon"
import { useGlobalState } from "../../../../Context/Context"
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import PropTypes from "prop-types";
import { IconEdit } from "../../../svgs/IconEdit.jsx";
import { IconTrash } from "../../../svgs/IconTrash.jsx";
import Swal from 'sweetalert2';
import { IconArrowRight2 } from "../../../svgs/IconArrowRight2"
import NewCityModal from "../../../molecules/Modal/NewCityModal"
//Hooks
import { useDeleteCity } from "../../../../Hooks/Cities/useDeleteCity"

export const AdminCitiesTable = ({ data, setReloadCities }) => {
    const { auth } = useGlobalState()
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
            <AdminUsersTableWrapper>
                <table>
                    <AdminUsersTabletTHead>
                        <AdminUsersTableTr
                            background={'#58C1CE'}
                        >
                            <AdminUsersTableTh
                                width="max-content"
                                justify='center'
                            >
                                <input type="checkbox" /*onClick={toggleAll(this)}*/ />
                                <span className="selectAllLabel"></span>
                            </AdminUsersTableTh>
                            <AdminUsersTableTh
                                width="10rem"
                            >
                                Ciudad
                            </AdminUsersTableTh>
                            <AdminUsersTableTh
                                width="30rem"
                            >

                                Descripción
                            </AdminUsersTableTh>
                            <AdminUsersTableTh
                                width="8.9rem"
                            >
                                Longitud
                            </AdminUsersTableTh>
                            <AdminUsersTableTh
                                width="8.9rem"
                            >
                                Latitud
                            </AdminUsersTableTh>
                            <AdminUsersTableTh
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
                            </AdminUsersTableTh>
                        </AdminUsersTableTr>
                    </AdminUsersTabletTHead>
                    <AdminUsersTableTBody>
                        {
                            data && data.length !== 0 && data.map((row) => {
                                return (
                                    <AdminUsersTableTr key={row.id}>
                                        <AdminUsersTableTd
                                            width="max-content"
                                            justify='center'
                                        ><input type="checkbox" />
                                        </AdminUsersTableTd>
                                        <AdminUsersTableTd
                                            width="10rem"
                                        >
                                            {row.nombreCiudad}
                                        </AdminUsersTableTd>
                                        <AdminUsersTableTd
                                            width="30rem"
                                        >
                                            {row.descripcionCiudad}
                                        </AdminUsersTableTd>
                                        <AdminUsersTableTd
                                            width="10rem"
                                        >
                                            {row.latitud}
                                        </AdminUsersTableTd>
                                        <AdminUsersTableTd
                                            width="10rem"
                                        >
                                            {row.longitud}
                                        </AdminUsersTableTd>
                                        <AdminUsersTableTd
                                            width="12.4rem"
                                            justify='center'
                                        >
                                            <button onClick={() => handleEdit(row)} style={{ border:'none', backgroundColor: 'transparent'}}>
                                                <IconEdit
                                                    color={"#F2A63B"}
                                                />
                                            </button>
                                            <button onClick={() => deleteCity(row.id)} style={{ border: 'none', backgroundColor: 'transparent' }}>
                                                <IconTrash
                                                    color={"#E72328"}
                                                />
                                            </button>
                                        </AdminUsersTableTd>
                                    </AdminUsersTableTr>
                                )
                            })
                        }
                    </AdminUsersTableTBody>
                </table>
            </AdminUsersTableWrapper>
            {openNewCity &&
                <NewCityModal isOpen={openNewCity} onClose={() => setOpenNewCity(false)} setReloadCities={setReloadCities}/>
            }
            {openEditCity && editInitialValues &&
                <NewCityModal isOpen={openEditCity} onClose={() => setOpenEditCity(false)} initialValue={editInitialValues} isNewCity={false} setReloadCities={setReloadCities} />
            }
        </>
    )
}

AdminCitiesTable.propTypes = {
    api: PropTypes.array,
};