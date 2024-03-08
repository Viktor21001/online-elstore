const React = require('react');
const Layout = require('./Layout');

function ProductPage({ device, login }) {
  return (
    <Layout login={login}>
      <div>
        {device ? (
          <div>
            <h1>{device?.name}</h1>
            <p>Price: {device?.price}</p>
            {device.DeviceInfos?.map((info, index) => (
              <div key={index}>
                <p>Title: {info?.title}</p>
                <p>Description: {info?.description}</p>
              </div>
            ))}
            {/* Другие детали устройства */}
          </div>
        ) : (
          <p>Устройство не найдено</p>
        )}
      </div>
    </Layout>
  );
}

module.exports = ProductPage;
