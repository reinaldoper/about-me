export function StyleSheet() {
    return (
        <style>{`
        .aboutme-bg {
            background: #18181b;
        }
        .aboutme-snap {
            scroll-snap-type: y mandatory;
        }

        .img-container {
            height: 100vh;
            scroll-snap-align: start;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
        }

        .img-container > div {
            width: 300px;
            height: 400px;
            margin: 20px;
            background: #23232a;
            overflow: hidden;
            border-radius: 16px;
            box-shadow: 0 4px 24px #0002;
        }

        .img-container img {
            width: 300px;
            height: 400px;
            object-fit: cover;
        }

        @media (max-width: 500px) {
            .img-container > div {
                width: 150px;
                height: 200px;
            }

            .img-container img {
                width: 150px;
                height: 200px;
            }
        }

        .img-container h2 {
            color: #8df0cc;
            margin: 0;
            font-family: "Azeret Mono", monospace;
            font-size: 38px;
            font-weight: 700;
            letter-spacing: -2px;
            line-height: 1.2;
            position: absolute;
            display: inline-block;
            top: calc(50% - 25px);
            left: calc(50% + 120px);
            white-space: nowrap;
        }

        .about-content {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.7);
            color: #fff;
            padding: 16px 24px;
            border-radius: 12px;
            max-width: 80vw;
            font-size: 1.1rem;
            text-align: center;
            box-shadow: 0 2px 12px #0003;
        }

        .progress {
            position: fixed;
            left: 0;
            right: 0;
            height: 5px;
            background: #8df0cc;
            bottom: 50px;
            transform: scaleX(0);
            z-index: 50;
        }
    `}</style>
    );
}