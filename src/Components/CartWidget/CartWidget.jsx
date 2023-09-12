import Swal from 'sweetalert2'; // Importa SweetAlert

const CartWidget = ({ comprar }) => {
    const cartItemCount = 3;

    const handleComprarClick = () => {
        // Muestra una alerta utilizando SweetAlert
        Swal.fire({
            title: '¿Deseas confirmar la compra?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                comprar();
            }
        });
    };

    return (
        <div onClick={handleComprarClick} style={{ cursor: 'pointer' }}>
            {cartItemCount} 🛒HAZ CLICK AQUI
        </div>
    );
};

export default CartWidget;