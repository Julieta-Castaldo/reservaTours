import {
    AdminTableTBody,
    AdminTableTd, AdminTableTdImg,
    AdminTableTh,
    AdminTableTr,
    AdminTabletTHead,
    AdminTableWrapper
} from "./AdminTable.styled.js";
import {IconArrowRight2} from "../../../svgs/IconArrowRight2.jsx";
import {ButtonIcon} from "../../../molecules/ButtonIcon/ButtonIcon.jsx";
import {IconEdit} from "../../../svgs/IconEdit.jsx";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import DeleteHandle from "../../../../handles/DeleteHandle.jsx";
import {MenuItem, FormControl, Select} from '@mui/material';
import {useGlobalState} from "../../../../Context/Context.jsx";
import {usePutTourCategory} from "../../../../Hooks/Tours/usePutTourCategory.jsx";


export const AdminTable = ({data}) => {
    const {auth} = useGlobalState()
    const {categories} = useGlobalState()
    const {setReloadProductsFlag} = useGlobalState()
    const [handlePutTourCategory] = usePutTourCategory()
    // function toggleAll(source) {
    //     const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    //     checkboxes.forEach(checkbox => {
    //         checkbox.checked = source.checked;
    //     });
    // }
    return (
        <AdminTableWrapper>
            <div style={{width: '100%', textAlign: 'end'}}>
                <Link to='/newCategory' style={{textDecoration: 'underline', color: 'grey'}}>
                    <p>Nueva categoría</p>
                </Link>
            </div>
            <table>
                <AdminTabletTHead>
                    <AdminTableTr
                        background={'#EBDECA'}
                    >
                        <AdminTableTh
                            width="max-content"
                            justify='center'
                        >
                            <input type="checkbox" /*onClick={toggleAll(this)}*/ />
                            <span className="selectAllLabel"></span>
                        </AdminTableTh>
                        <AdminTableTh
                            width="10.8rem"
                        >Nombre</AdminTableTh>
                        <AdminTableTh
                            width="15.1rem"
                        >Descripción</AdminTableTh>
                        <AdminTableTh
                            width="8.9rem"
                        >Ciudad</AdminTableTh>
                        <AdminTableTh
                            width="13rem"
                        >Categoría</AdminTableTh>
                        <AdminTableTh
                            width="13rem"
                        >Duración</AdminTableTh>
                        <AdminTableTh
                            width="8.9rem"
                        >Imagen</AdminTableTh>
                        <AdminTableTh
                            width="12.4rem"
                            justify='center'
                        >
                            <Link to='/newTour'>
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
                                />
                            </Link>
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
                                        width="10.8rem"
                                    >
                                        {row.nombre}
                                    </AdminTableTd>
                                    <AdminTableTd
                                        width="15.1rem"
                                    >
                                        {row.descripcion}
                                    </AdminTableTd>
                                    <AdminTableTd
                                        width="8.9rem"
                                    >
                                        {row.ciudad && row.ciudad.nombreCiudad}
                                    </AdminTableTd>
                                    <AdminTableTd
                                        width="13rem"
                                    >
                                        <FormControl variant="standard">
                                            <Select
                                                labelId="demo-simple-select-standard-label"
                                                id="demo-simple-select-standard"
                                                value={row.categoria && row.categoria.id}
                                                onChange={(e) => {
                                                    setReloadProductsFlag(true)
                                                    handlePutTourCategory(row.id, e.target.value, setReloadProductsFlag)
                                                }}
                                                disabled={auth && row.id === auth.id || row.id === 1}
                                                label="Categoría"
                                                sx={{fontSize: '14px'}}
                                            >
                                                {categories && categories.map(category => {
                                                    return (
                                                        <MenuItem
                                                            disabled={row.categoria && row.categoria.id === category.id}
                                                            value={category.id}>{category.nombreCategoria}</MenuItem>
                                                    )
                                                })}
                                            </Select>
                                        </FormControl>
                                    </AdminTableTd>
                                    <AdminTableTd
                                        width="13rem"
                                    >
                                        duración
                                    </AdminTableTd>
                                    <AdminTableTdImg
                                        width="8.9rem"
                                        imgUrl={row.listaImagenes && row.listaImagenes[0] && row.listaImagenes[0].url}
                                    >
                                    </AdminTableTdImg>
                                    <AdminTableTd
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
                                        <DeleteHandle tourId={row.id}>
                                        </DeleteHandle>
                                    </AdminTableTd>
                                </AdminTableTr>
                            )
                        })
                    }
                </AdminTableTBody>
            </table>
        </AdminTableWrapper>
    )
}

AdminTable.propTypes = {
    api: PropTypes.array,
};