import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar({ onCartClick }) {
  const navigate = useNavigate();

  const items = [
    {
      label: 'Shop',
      icon: 'pi pi-shopping-bag',
      command: () => {
        navigate('/')
      }
    },
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
      command: () => {
        onCartClick()
      }
    },
    {
      label: 'Order History',
      icon: 'pi pi-book',
      command: () => {
        navigate('/order-history')
      }
    }
  ]

  return (
    <Menubar model={items} />
  )
}