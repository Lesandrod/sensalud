from rest_framework import routers
from .views import UsuariosViewSet,ContactosViewSet,RegistrosViewSet,AutoresViewSet,RecomendacionesViewSet

router = routers.DefaultRouter()

router.register('Api/usuarios', UsuariosViewSet, 'usuarios')
router.register('Api/contactos', ContactosViewSet, 'contactos')
router.register('Api/registros', RegistrosViewSet, 'registros')
router.register('Api/autores', AutoresViewSet, 'autores')
router.register('Api/recomendaciones', RecomendacionesViewSet, 'recomendaciones')

urlpatterns = router.urls
