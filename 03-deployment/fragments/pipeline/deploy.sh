#might become a wget
cp ${JENKINS_HOME}/repository/${APP_NAME}/lab-${PIPELINE_VERSION}.zip .

#might need to add scp and remote deploy
mkdir -p $SERVER_BASE/$APP_NAME

rm -rf $SERVER_BASE/$APP_NAME.prev
mv $SERVER_BASE/$APP_NAME $SERVER_BASE/$APP_NAME.prev || true

mkdir -p $SERVER_BASE/$APP_NAME

cd $SERVER_BASE/$APP_NAME
jar xvf $WORKSPACE/lab-${PIPELINE_VERSION}.zip 

ls $SERVER_BASE/$APP_NAME
