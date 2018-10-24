<?php

namespace Vendor\Mymodule\Setup;

use Magento\Cms\Model\PageFactory;
use Magento\Framework\Setup\InstallDataInterface;
use Magento\Framework\Setup\ModuleContextInterface;
use Magento\Framework\Setup\ModuleDataSetupInterface;

class InstallData implements InstallDataInterface
{
    private $pageFactory;

    public function __construct(PageFactory $pageFactory)
    {
        $this->pageFactory = $pageFactory;
    }

    /**
     * Creating new cms page
     */

    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)
    {
        $cmsPageData = [
            'title' => 'My cms page',
            'page_layout' => '1column',
            'identifier' => 'my-page',
            'content' => "",
            'is_active' => 1,
            'stores' => [0],
            'sort_order' => 0
        ];

        $this->pageFactory->create()->setData($cmsPageData)->save();
    }
}