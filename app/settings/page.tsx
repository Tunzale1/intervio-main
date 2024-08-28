import MainLayout from "@/components/layout/Layout";
import SettingTabs from "@/components/settingsForms/SettingsTabs";

const Index = () => {
  return (
    <MainLayout>
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-3xl font-semibold">Settings</h1>
          <p className="text-lg">Here is the list of all settings</p>
        </div>
        <div className="w-full bg-white rounded-2xl p-6 mt-4">
          <SettingTabs />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
