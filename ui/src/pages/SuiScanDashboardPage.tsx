import { FullScreenContainer } from '../component/FullScreenContainer';
import { SuiScanUrlMap } from '../config';
import useSwitchNetwork from '../hooks/useSwitchNetwork';

export default function SuiScanDashboardPage() {
    const { currentNetwork } = useSwitchNetwork();
    return (
        <FullScreenContainer>
            <div
                style={{
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'hidden'
                }}
            >
                <iframe
                    width="100%"
                    height="100%"
                    title="SUI Scan Dashboard"
                    style={{
                        position: 'absolute',
                        top: '-400px', // move up by 240px
                        height: 'calc(100% + 400px)' // add 240px to the height to compensate for the upward shift
                    }}
                    src={SuiScanUrlMap[currentNetwork]}
                />
            </div>
        </FullScreenContainer>
    );
}
