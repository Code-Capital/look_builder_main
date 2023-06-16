import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tab1 from "./tab1";
import JacketTab from "./JacketTab/JacketTab";
import TrousersTab from "./TrousersTab/TrousersTab";
import Tab4 from "./tab4";
import Tab5 from "./tab5";
import {useContext} from "react";
import {AppContext} from "../../../context/SuitBuilderContext";
import Tab3_1 from "./tab3.1";
import {SelectionContext} from "../../../context/UserSelectionContext";
import WaistcoatTab from "./WaistcoatTab/WaistcoatTab";
import SizeTab from "./SizeTab/SizeTab";
import ExtraTrousersTab from "./TrousersTab/ExtraTrousersTab";
import SummaryTab from "./Summary/SummaryTab";


export default function Sidebar({}) {
    const {setCurrentTab, currentTab} = useContext(AppContext);
    const {hasExtraTrousers} = useContext(SelectionContext);


    return (
        <>
            <Tabs onSelect={(index) => {
                setCurrentTab(index)
            }}
                  selectedIndex={currentTab}
            >
                <TabList className={"sidebar-tabs-list"}>
                    <Tab>1. Fabric</Tab>
                    <Tab>2. Jacket</Tab>
                    <Tab>3. Trousers</Tab>
                    <Tab>4. Extra Trousers</Tab>
                    <Tab>5. Waistcoat</Tab>
                    <Tab>6. Size</Tab>
                    <Tab>7. Summary</Tab>
                </TabList>

                <TabPanel><Tab1/></TabPanel>
                <TabPanel><JacketTab/></TabPanel>
                <TabPanel><TrousersTab/></TabPanel>
                <TabPanel><ExtraTrousersTab extra/></TabPanel>
                <TabPanel><WaistcoatTab extra/></TabPanel>
                <TabPanel><SizeTab/></TabPanel>
                <TabPanel><SummaryTab/></TabPanel>
            </Tabs>
        </>
    )
}
