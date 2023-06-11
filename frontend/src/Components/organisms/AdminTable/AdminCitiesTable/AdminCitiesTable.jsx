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

export const AdminCitiesTable = ({ data, setReloadUsers }) => {
    const { auth } = useGlobalState()
    const navigate = useNavigate()
    const [openNewCity, setOpenNewCity] = useState(false)

    useEffect(() => {
        if (!auth) navigate('/')
    }, [])

    const handleDeleteCategory = () => {
        Swal.fire({
            title: 'Confirmar delete',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            width: '40em',

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
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
                                width="8rem"
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
                                            width="8rem"
                                        >
                                            {row.nombreCategoria}
                                        </AdminUsersTableTd>
                                        <AdminUsersTableTd
                                            width="30rem"
                                        >
                                            {row.descripcionCategoria}
                                        </AdminUsersTableTd>
                                        <AdminUsersTableTd
                                            width="10rem"
                                        >
                                            {row.descripcionCategoria}
                                        </AdminUsersTableTd>
                                        <AdminUsersTableTd
                                            width="10rem"
                                        >
                                            {row.descripcionCategoria}
                                        </AdminUsersTableTd>
                                        <AdminUsersTableTd
                                            width="12.4rem"
                                            justify='center'
                                        >
                                            <Link
                                                to='/admin/'
                                            >
                                                <IconEdit
                                                    color={"#F2A63B"}
                                                />
                                            </Link>
                                            <button onClick={() => handleDeleteCategory()} style={{ border: 'none', backgroundColor: 'transparent' }}>
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
                <NewCityModal isOpen={openNewCity} onClose={() => setOpenNewCity(false)}/>
            }
        </>
    )
}

AdminCitiesTable.propTypes = {
    api: PropTypes.array,
};