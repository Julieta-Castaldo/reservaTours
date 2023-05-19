import {
    AdminTableTBody,
    AdminTableTd,
    AdminTableTh,
    AdminTableTr,
    AdminTabletTHead,
    AdminTableWrapper
} from "./AdminTable.styled.js";
import {IconArrowRight2} from "../../svgs/IconArrowRight2.jsx";
import {ButtonIcon} from "../../molecules/ButtonIcon/ButtonIcon.jsx";
import {IconEdit} from "../../svgs/IconEdit.jsx";
import {Link} from "react-router-dom";
import {IconTrash} from "../../svgs/IconTrash.jsx";
import PropTypes from "prop-types";

export const AdminTable = (props) => {

    const {api} = props;

    function toggleAll(source) {
        const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = source.checked;
        });
    }

    const data = api ? api : [
        {
            id: 1,
            title: 'test1'
        },
        {
            id: 2,
            title: 'test2'
        },
        {
            id: 3,
            title: 'test2'
        }
    ];

    return (
        <AdminTableWrapper>
            <table>
                <AdminTabletTHead>
                    <AdminTableTr
                        background={'#EBDECA'}
                    >
                        <AdminTableTh
                            width="max-content"
                            justify='center'
                        >
                            <input type="checkbox" onClick={toggleAll(this)}/>
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
                        >Fecha salida</AdminTableTh>
                        <AdminTableTh
                            width="13rem"
                        >Fecha entrada</AdminTableTh>
                        <AdminTableTh
                            width="8.9rem"
                        >Imagen</AdminTableTh>
                        <AdminTableTh
                            width="12.4rem"
                            justify='center'
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
                            />
                        </AdminTableTh>

                    </AdminTableTr>
                </AdminTabletTHead>
                <AdminTableTBody>
                    {
                        data?.map((row) => (
                            <AdminTableTr key={row.id}>
                                <AdminTableTd
                                    width="max-content"
                                    justify='center'
                                ><input type="checkbox"/>
                                </AdminTableTd>
                                <AdminTableTd
                                    width="10.8rem"
                                >
                                    Recorrido Guatapé
                                </AdminTableTd>
                                <AdminTableTd
                                    width="15.1rem"
                                >
                                    Data 2
                                </AdminTableTd>
                                <AdminTableTd
                                    width="8.9rem"
                                >
                                    Data 3
                                </AdminTableTd>
                                <AdminTableTd
                                    width="13rem"
                                >
                                    Data 3
                                </AdminTableTd>
                                <AdminTableTd
                                    width="13rem"
                                >
                                    Data 3
                                </AdminTableTd>
                                <AdminTableTd
                                    width="8.9rem"
                                >
                                    Data 3
                                </AdminTableTd>
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
                                    <Link
                                        to='/admin/'
                                    >
                                        <IconTrash
                                            color={"#E72328"}
                                        />
                                    </Link>
                                </AdminTableTd>
                            </AdminTableTr>
                        ))
                    }
                </AdminTableTBody>
            </table>
        </AdminTableWrapper>
    )
}

AdminTable.propTypes = {
    api: PropTypes.array.isRequired,
};