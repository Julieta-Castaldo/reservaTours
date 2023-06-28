import {
    AdminUsersTableTBody,
} from "../AdminTable/AdminUsersTable/AdminUsersTable.styled"
import { useGlobalState } from "../../../Context/Context"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types";
import {
    AdminTableSubWrapper,
    AdminTableTag, AdminTableTd, AdminTableTh, AdminTableTr,
    AdminTabletTHead,
    AdminTableWrapper
} from "../AdminTable/AdminProductsTable/AdminTable.styled"

export const UserReservationTable = ({ data }) => {
    const { auth } = useGlobalState()
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth) navigate('/')
    }, [])

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
                                    color={'#fff'}
                                    width="14rem"
                                >
                                    Tour
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="9rem"
                                >

                                    Duración
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="10rem"
                                >
                                    Menú
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="10rem"
                                >
                                    Alojamiento
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="12rem"
                                >
                                    Fecha inicio
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="12rem"
                                >
                                    Fecha final
                                </AdminTableTh>
                                <AdminTableTh
                                    color={'#fff'}
                                    width="12rem"
                                >
                                    Medio de pago
                                </AdminTableTh>
                            </AdminTableTr>
                        </AdminTabletTHead>
                        <AdminUsersTableTBody>
                            {
                                data && data.length !== 0 && data.map((row) => {
                                    return (
                                        <AdminTableTr key={row.id}>
                                            <AdminTableTd
                                                justify='center'
                                                width="14rem"
                                            >
                                                Nombre del tour
                                            </AdminTableTd>
                                            <AdminTableTd
                                                justify='center'
                                                width="9rem"
                                            >
                                                {row.duracion} días
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="10rem"
                                                justify='center'

                                            >
                                                {row.menu}
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="10rem"
                                                justify='center'

                                            >
                                                {row.alojamiento}
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="12.4rem"
                                                justify='center'
                                            >
                                                {row.fechaInicio}
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="12.4rem"
                                                justify='center'
                                            >
                                                {row.fechaFinalizacion}
                                            </AdminTableTd>
                                            <AdminTableTd
                                                width="12.4rem"
                                                justify='center'
                                            >
                                                {row.medioDePago}
                                            </AdminTableTd>
                                        </AdminTableTr>
                                    )
                                })
                            }
                        </AdminUsersTableTBody>
                    </AdminTableTag>
                </AdminTableSubWrapper>
            </AdminTableWrapper>
        </>
    )
}

UserReservationTable.propTypes = {
    api: PropTypes.array,
};