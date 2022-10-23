import Spline from '@splinetool/react-spline';

export default function App() {

    function splineLoad(sp: any) {
        sp.setZoom(0.8);
    }

    return (
        <>
            <Spline
                scene="https://prod.spline.design/wBzkSnvm8NcEdYAc/scene.splinecode"
                onLoad={splineLoad}
                width="h-max"
                height="h-screen"
            />
        </>
    );
}
