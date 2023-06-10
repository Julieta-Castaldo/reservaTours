import { AdminUsersTableWrapper, AdminUsersTableTBody, AdminUsersTabletTHead, AdminUsersTableTd, AdminUsersTableTh, AdminUsersTableTr } from "../AdminUsersTable/AdminUsersTable.styled"
import { AdminTableTdImg } from "../AdminProductsTable/AdminTable.styled"
import { useGlobalState } from "../../../../Context/Context"
import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import PropTypes from "prop-types";
import { IconEdit } from "../../../svgs/IconEdit.jsx";
import { IconTrash } from "../../../svgs/IconTrash.jsx";

export const AdminCategoriesTable = ({ data, setReloadUsers }) => {
    const { auth } = useGlobalState()
    const navigate = useNavigate()

    useEffect(() => {
        if (!auth) navigate('/')
    }, [])

    return (
        <AdminUsersTableWrapper>
            <div style={{ width: '100%', textAlign: 'end' }}>
                <Link to='/newCategory' style={{ textDecoration: 'underline', color: 'grey' }}>
                    <p>Nueva categoría</p>
                </Link>
            </div>
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
                            Nombre
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="30rem"
                        >

                            Descripción
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="8.9rem"
                        >
                            Imagen
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="8.9rem"
                        >
                            Acciones
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
                                    <AdminTableTdImg
                                        width="8.9rem"
                                        imgUrl={row.url_imagen}
                                    >
                                    </AdminTableTdImg>
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
                                        <Link
                                            to='/admin/'
                                        >
                                            <IconTrash
                                                color={"#E72328"}
                                            />
                                        </Link>
                                    </AdminUsersTableTd>
                                </AdminUsersTableTr>
                            )
                        })
                    }
                </AdminUsersTableTBody>
            </table>
        </AdminUsersTableWrapper>
    )
}

AdminCategoriesTable.propTypes = {
    api: PropTypes.array,
};