import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
// import "./index.css";
import "./output.css";
import HomeCards from "./Components/AdminDashboard/Home/HomeCards";
import ProfileView from "./Components/AdminDashboard/Profile";
import ResetPassword from "./Components/AdminDashboard/Profile/ResetPass";
import Login from "./Login";
import ForgotPass from "./Login/ForgotPassword";
import CompanySetting from "./Components/AdminDashboard/Settings/CompanySetting";
import SiteSettingOuter from "./Components/AdminDashboard/Settings/SiteSettingOuter";
import FieldExecutive from "./Components/AdminDashboard/Members/FieldExecutive";
import MobileHistory from "./Components/Report/Mobile";
import Aeps from "./Components/Report/Aeps";
import PendingReport from "./Components/Report/PendingReport";
import AdminProfit from "./Components/Report/AdminProfitReport";
import CreateUser from "./Components/AdminDashboard/Members/FieldExecutive/CreateNewUser";
import IncomeReport from "./Components/Report/IncomeReport";
import Admin from "./Components/UserIncome/Admin";
import SuperAdminIncome from "./Components/UserIncome/SuperAdmin";
// import Distributor from "./Components/UserIncome/Distributor";
import NotWorking from "./Components/UserIncome/NotWorkingMember";
import CommissionBal from "./Components/Payment/CommissionBalance";
import BalanceReturn from "./Components/Payment/BalanceReturn";
import RefundManager from "./Components/Report/RefundManager";
import LedgerReport from "./Components/Report/LedgerReport";
import DebitReport from "./Components/Report/PaymentReport/DebitReport";
import CreditReport from "./Components/Report/PaymentReport/creditReport";
import PaymnetView from "./Components/Payment/PaymentView";
import SolvedDisputes from "./Components/Disputes/SolveDisputes";
import PendingDisputes from "./Components/Disputes/PendingDispute";
import FEIncome from "./Components/UserIncome/FEIncome";
import SuspendedUserInc from "./Components/UserIncome/SuspendedUser";
import ReatilerIncome from "./Components/UserIncome/RetailerIncome";
import BankSetting from "./Components/AdminDashboard/Settings/BankSetting";
import NewBank from "./Components/AdminDashboard/Settings/BankSetting/NewBankAccount";
import PackageSetting from "./Components/AdminDashboard/Settings/PackageSetting";
import SMSSetting from "./Components/AdminDashboard/Settings/SmsSetting";
import OtpVerify from "./Login/ForgotPassword/OTPVerify";
import NotWorkingList from "./Components/AdminDashboard/Members/NotWorkingList";
import BalanceReturnReq from "./Components/Payment/BalanceReturnReq";
import PurchaseBal from "./Components/Payment/PurchaseBalance";
import BankMaster from "./Components/Master/BankMaster";
import RoleMaster from "./Components/Master/RoleMaster";
import StatusMaster from "./Components/Master/StatusMaster";
import ServiceMaster from "./Components/Master/ServiceMaster";
import PaymentMethod from "./Components/Master/PayMethod";
import AgentOnboarding from "./Components/Master/AgentOnboarding";
import ContactEnquiry from "./Components/Master/ContactEnquiry";
import CompanyStaff from "./Components/Master/CompanyStaff";
import Broadcast from "./Components/Master/Broadcast";
import Pancard from "./Components/Report/Pancard";
import Investment from "./Components/Report/Investment";
import ApiSummary from "./Components/Report/ApiSummary";
import Upi from "./Components/Report/Upi";
import QRCollection from "./Components/Report/QRCollection";
import WalletTransfer from "./Components/Report/WalletTransfer";
import Franchise from "./Components/AdminDashboard/Members/Franchise";
import Payout from "./Components/Report/Payout";
import SuperDistributor from "./Components/AdminDashboard/Members/SuperDistributor";
import DistributorDS from "./Components/AdminDashboard/Members/Distributor";
import RetailerRT from "./Components/AdminDashboard/Members/Retailers";
import FranchiseFSDS from "./Components/UserIncome/Franchise";
import BalanceTransfer from "./Components/Payment/BalanceTransfer";
import Banking from "./Components/Report/Banking";
import Verify from "./Components/Report/Verify";
import BilPay from "./Components/Report/BillPay";
import SuspendedUser from "./Components/AdminDashboard/Members/SuspendedUser";
import NewPackage from "./Components/AdminDashboard/Settings/PackageSetting/NewPackage";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPass/>}/>
          <Route path="/verify-otp" element={<OtpVerify/>}/>
          
          <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<HomeCards/>} />
          <Route path="/profile" element={<ProfileView />} />
          {/* password */}
          <Route path="/reset" element={<ResetPassword />} />
        {/* settings */}
          <Route path="/company-settings" element={<CompanySetting/>}/>
          <Route path='/site-settings' element={<SiteSettingOuter/>}/>
          <Route path="/bank-setting" element={<BankSetting/>} />
          <Route path="/new-bank-account" element={<NewBank/>}/>
          <Route path="/package-setting" element={<PackageSetting/>}/>
          <Route path="/sms-settings" element={<SMSSetting/>}/>
          <Route path="/new-package" element={<NewPackage/>}/>
          {/* report */}
          <Route path="/pending-report" element={<PendingReport/>}/>
          <Route path="/ledger-report" element={<LedgerReport/>}/>
          <Route path="/credit-report" element={<CreditReport/>}/>
          <Route path="/mobile-history" element={<MobileHistory/>}/>
          <Route path="/debit-report" element={<DebitReport/>}/>
          <Route path="/aeps" element={<Aeps/>}/>
          <Route path="/refund-manager" element={<RefundManager/>}/>
          <Route path='/banking' element={<Banking/>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="/bill-payments" element ={<BilPay/>} />
          <Route path="/admin-report" element={<AdminProfit/>}/>
          <Route path="/pancard" element={<Pancard/>}/>
          <Route path="/payout" element={<Payout />}/>
          <Route path="/investment" element={<Investment/>}/>
          <Route path="/api-summary" element={<ApiSummary/>}/>
          <Route path="/upi" element={<Upi/>}/>
          <Route path="/qr-collection" element={<QRCollection/>} />
          <Route path="/wallet-transfer" element={<WalletTransfer/>} />
          {/* members */}
          <Route path="/field-executive" element={<FieldExecutive/>}/>
          <Route path="/distributor-ds" element={<DistributorDS/>}/>
          <Route path="/retailer" element={<RetailerRT/>}/>
          <Route path="/create-user" element={<CreateUser/>}/>
          <Route path="/franchise" element={<Franchise/>}/>
          <Route path="/not-working" element={<NotWorking />}/>   
          <Route path="/commission-detail" element={<CommissionBal/>}/>
          <Route path="/super-distributor" element={<SuperDistributor/>}/>     
          <Route path="/balance-return" element={<BalanceReturn/>}/>
          <Route path="/balance-transfer" element={<BalanceTransfer/>}/>
          <Route path="/suspended-user" element={<SuspendedUser/>}/> 
          {/* disputes */}
          <Route path="/solve-dispute" element={<SolvedDisputes/>}/>
          <Route path="/pending-disputes" element={<PendingDisputes/>}/>

          {/* userIncome & Payment*/}
          <Route path="/super-admin" element={<SuperAdminIncome/>}/>
          <Route path="/payment-view" element={<PaymnetView/>}/>
          <Route path="/admin-income" element={<Admin/>}/>
          <Route path="/income-data" element={<IncomeReport/>}/>
          <Route path="/fe-income" element={<FEIncome/>}/>
          <Route path="/retailer-income" element={<ReatilerIncome/>}/>
          <Route path="/suspended-user-income" element={<SuspendedUserInc/>}/>
          <Route path="/not-working-user-list" element={<NotWorkingList/>}/>
          <Route path= "/balance-return-request" element={<BalanceReturnReq/>} />
          <Route path= "/purchase-bal" element={<PurchaseBal/>}/>
          <Route path="/franchise-fsds" element={<FranchiseFSDS/>}/>
         
          {/* Master Section */}
          <Route path="/bank-master" element={<BankMaster/> }/>
          <Route path="/role-master" element={<RoleMaster/> }/>
          <Route path="/status-master" element={<StatusMaster/>}  />
          <Route path="/service-master" element={<ServiceMaster/>}  />
          <Route path="/payment-beneficiary-method" element={<PaymentMethod/>}  />
          <Route path="/agent-onboarding-list" element={<AgentOnboarding/>} />
          <Route path="/contact-enquiry" element={<ContactEnquiry/>} />
          <Route path="/company-staff-permission" element={<CompanyStaff/>}  />
          <Route path="/broadcast" element={<Broadcast/>} />
          </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
