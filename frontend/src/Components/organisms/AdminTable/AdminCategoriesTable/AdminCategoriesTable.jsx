import {
    AdminTableSubWrapper,
    AdminTableTag, AdminTableTBody, AdminTableTd,
    AdminTableTdImg, AdminTableTh, AdminTableTr, AdminTabletTHead,
    AdminTableWrapper
} from "../AdminProductsTable/AdminTable.styled"
import {useGlobalState} from "../../../../Context/Context"
import {useEffect} from "react"
import {useNavigate, Link} from "react-router-dom"
import PropTypes from "prop-types";
import {IconEdit} from "../../../svgs/IconEdit.jsx";
import {IconTrash} from "../../../svgs/IconTrash.jsx";
import Swal from 'sweetalert2';
//Hooks
import {useDeleteCategory} from "../../../../Hooks/Categories/useDeleteCategory"

export const AdminCategoriesTable = ({data, setReloadCategories}) => {
    const {auth} = useGlobalState()
    const navigate = useNavigate()
    const [handleDeleteCategory] = useDeleteCategory()
    useEffect(() => {
        if (!auth) navigate('/')
    }, [])

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Estás por eliminar una categoría',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            width: '40em',

        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteCategory(id, setReloadCategories)
            }
        })
    }

    return (
        <AdminTableWrapper>
            <div style={{width: '100%', textAlign: 'center'}}>
                <Link to='/newCategory' style={{textDecoration: 'underline', color: 'grey'}}>
                    <p>Nueva categoría</p>
                </Link>
            </div>
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
                                width="8rem"
                            >
                                Nombre
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
                                Imagen
                            </AdminTableTh>
                            <AdminTableTh
                                color={'#fff'}
                                width="8.9rem"
                            >
                                Acciones
                            </AdminTableTh>
                        </AdminTableTr>
                    </AdminTabletTHead>
                    <AdminTableTBody>
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
                                            width="8rem"
                                        >
                                            {row.nombreCategoria}
                                        </AdminTableTd>
                                        <AdminTableTd
                                            width="30rem"
                                        >
                                            {row.descripcionCategoria}
                                        </AdminTableTd>
                                        <AdminTableTdImg
                                            width="8.9rem"
                                            imgUrl={row.url_imagen}
                                        >
                                        </AdminTableTdImg>
                                        <AdminTableTd
                                            width="12.4rem"
                                            justify='center'
                                        >
                                            <button onClick={() => handleDelete(row.id)}
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
                    </AdminTableTBody>
                </AdminTableTag>
            </AdminTableSubWrapper>
        </AdminTableWrapper>
    )
}

AdminCategoriesTable.propTypes = {
    api: PropTypes.array,
};