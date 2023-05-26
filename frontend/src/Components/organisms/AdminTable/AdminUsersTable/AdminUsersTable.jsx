import {
    AdminUsersTableTBody,
    AdminUsersTableTd, AdminUsersTableTdImg,
    AdminUsersTableTh,
    AdminUsersTableTr,
    AdminUsersTabletTHead,
    AdminUsersTableWrapper
} from "./AdminUsersTable.styled.js";
import { IconArrowRight2 } from "../../../svgs/IconArrowRight2.jsx";
import { ButtonIcon } from "../../../molecules/ButtonIcon/ButtonIcon.jsx";
import { IconEdit } from "../../../svgs/IconEdit.jsx";
import { Link } from "react-router-dom";
import { IconTrash } from "../../../svgs/IconTrash.jsx";
import PropTypes from "prop-types";


export const AdminUsersTable = ({ data }) => {

    // function toggleAll(source) {
    //     const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    //     checkboxes.forEach(checkbox => {
    //         checkbox.checked = source.checked;
    //     });
    // }

    return (
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
                            width="10.8rem"
                        >
                            Nombre
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="15.1rem"
                        >

                            Apellido
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="8.9rem"
                        >
                            Email
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="13rem"
                        >
                            Estado
                        </AdminUsersTableTh>
                        <AdminUsersTableTh
                            width="13rem"
                        >
                            Rol Actual
                        </AdminUsersTableTh>

                        {/* <AdminUsersTableTh
                            width="12.4rem"
                            justify='center'
                        >
                            <Link to='/newTour'>
                                <ButtonIcon
                                    text='Agregar'
                                    disabled={true}
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
                        </AdminUsersTableTh> */}

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
                                        width="10.8rem"
                                    >
                                        {row.nombre}
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="15.1rem"
                                    >
                                        {row.apellido}
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="8.9rem"
                                    >
                                        {row.mail}
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="13rem"
                                    >
                                        {row.estado}
                                    </AdminUsersTableTd>
                                    <AdminUsersTableTd
                                        width="13rem"
                                    >
                                        {row.rol}
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

AdminUsersTable.propTypes = {
    api: PropTypes.array,
};