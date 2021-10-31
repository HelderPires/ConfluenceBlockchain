#!/usr/bin/env sh

BASE_HREF=${BASE_HREF-'/'}
DEPLOY_URL=${DEPLOY_URL-$BASE_HREF}
HTML_DATADIR=${HTML_DATADIR-/usr/share/nginx/html}

perl -p -i -e 's#BASE_HREF_PLACEHOLDER#'$BASE_HREF'#g; s#DEPLOY_URL_PLACEHOLDER#'$DEPLOY_URL'#g'  $(find $HTML_DATADIR -type f -exec grep -Iq . {} \; -print )

nginx -g 'daemon off;'
